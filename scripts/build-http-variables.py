import os
import shutil
from templateframework.metadata import Metadata

methodsName = ['get', 'get', 'save', 'edit', 'remove']

def run(metadata: Metadata = None):
    computedInputs = metadata.computed_inputs
    entityName = str(metadata.computed_inputs['entity_pascal'])
    buildHttpMethodNames(computedInputs, entityName)
    return metadata

def buildHttpMethodNames(computedInputs, entityName):
    for i in range(len(methodsName)):
        methodName = methodsName[i]
        methodVar = buildMethodVar(methodName,i)
        methodValue = buildMethodValue(methodName, entityName, i)
        computedInputs[methodVar] = methodValue

def buildMethodVar(methodName, i):
    return methodName + ('_list' if i == 0 else '_item')

def buildMethodValue(methodName, entityName, i):
    suffix = ''

    if i == 0:
        suffix = 's'
    if i == 1:
        suffix = 'ById'
     
    return methodName + entityName + suffix