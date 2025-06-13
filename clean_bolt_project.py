import os
import shutil
import zipfile

# === CONFIGURATION ===

# Replace this with your actual project path
PROJECT_PATH = r"C:\Users\manip\OneDrive\Desktop\project-bolt-sb1-jqxfmnrf\Portfolio"

# Output zip path
OUTPUT_ZIP = r"C:\Users\manip\OneDrive\Desktop\bolt_project_cleaned.zip"

# Unnecessary folders to remove
REMOVE_FOLDERS = [
    '__pycache__',
    '.ipynb_checkpoints',
    'venv',
    'env',
    'node_modules',
    '.git'
]

# Unnecessary files to remove
REMOVE_EXTENSIONS = ['.log', '.DS_Store']

# Files larger than this (MB) will be excluded
MAX_FILE_SIZE_MB = 100

# === CLEANING FUNCTION ===

def is_large_file(file_path):
    size_mb = os.path.getsize(file_path) / (1024 * 1024)
    return size_mb > MAX_FILE_SIZE_MB

def clean_and_zip(source_path, output_zip):
    # Create a temporary clean folder
    temp_clean_path = source_path + "_cleaned"
    if os.path.exists(temp_clean_path):
        shutil.rmtree(temp_clean_path)
    shutil.copytree(source_path, temp_clean_path)

    # Walk and remove unnecessary folders & files
    for root, dirs, files in os.walk(temp_clean_path, topdown=False):
        for folder in dirs:
            if folder in REMOVE_FOLDERS:
                folder_path = os.path.join(root, folder)
                print(f"Removing folder: {folder_path}")
                shutil.rmtree(folder_path)
                
        for file in files:
            file_path = os.path.join(root, file)
            if any(file.endswith(ext) for ext in REMOVE_EXTENSIONS) or is_large_file(file_path):
                print(f"Removing file: {file_path}")
                os.remove(file_path)

    # Create ZIP
    print("Creating zip...")
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(temp_clean_path):
            for file in files:
                abs_path = os.path.join(root, file)
                rel_path = os.path.relpath(abs_path, temp_clean_path)
                zipf.write(abs_path, rel_path)
    print(f"Zip created at: {output_zip}")

    # Clean up temporary folder
    shutil.rmtree(temp_clean_path)
    print("Temporary clean folder removed.")

# === RUN ===

if __name__ == "__main__":
    clean_and_zip(PROJECT_PATH, OUTPUT_ZIP)
