import os
import shutil
from templateframework.metadata import Metadata

def run(metadata: Metadata = None):
    projectPath = str(metadata.target_path)
    tmpPath = projectPath + '/' + str(metadata.inputs['project_name'])

    removeFile(projectPath + '/.gitignore')
    removeFile(projectPath + '/README.md')
    moveFiles(tmpPath, projectPath)
    shutil.rmtree(tmpPath)
    return metadata

def removeFile(pathFile):
    if os.path.exists(pathFile):
        os.remove(pathFile)

def moveFiles(src_path, dst_path):
    fileNames = os.listdir(src_path)
    for file_name in fileNames:
        shutil.move(os.path.join(src_path, file_name), dst_path)
