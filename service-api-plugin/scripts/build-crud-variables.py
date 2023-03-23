import os
import shutil
from templateframework.metadata import Metadata

methods_name = ['get', 'get', 'save', 'edit', 'remove']

def run(metadata: Metadata = None):
    computed_inputs = metadata.computed_inputs
    entity_name = str(metadata.computed_inputs['resouce_pascal'])
    buildCrudMethodNames(computed_inputs, entity_name)
    return metadata

def buildCrudMethodNames(computed_inputs, entity_name):
    for i in range(len(methods_name)):
        method_name = methods_name[i]
        method_var = buildMethodVar(method_name,i)
        method_value = buildMethodValue(method_name, entity_name, i)
        computed_inputs[method_var] = method_value

def buildMethodVar(method_name, i):
    return method_name + ('_list' if i == 0 else '_item')

def buildMethodValue(method_name, entity_name, i):
    suffix = ''

    if i == 0:
        suffix = 'List'
    if i == 1:
        suffix = 'ById'

    return method_name + entity_name + suffix