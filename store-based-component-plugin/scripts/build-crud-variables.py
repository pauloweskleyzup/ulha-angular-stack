import os
import shutil
from templateframework.metadata import Metadata

methods_name = ['get', 'get', 'save', 'edit', 'remove']

def run(metadata: Metadata = None):
    computed_inputs = metadata.computed_inputs
    entity_name = str(metadata.computed_inputs['entity_store_pascalcase'])
    resource_name = str(metadata.computed_inputs['resource_pascal'])
    buildCrudMethodNames('facade_service_', computed_inputs, entity_name)
    buildCrudMethodNames('service_', computed_inputs, resource_name)
    return metadata

def buildCrudMethodNames(prefix, computed_inputs, element_name):
    for i in range(len(methods_name)):
        method_name = methods_name[i]
        method_var = buildMethodVar(prefix, method_name, i)
        method_value = buildMethodValue(method_name, element_name, i)
        computed_inputs[method_var] = method_value

def buildMethodVar(prefix, method_name, i):
    return prefix + method_name + ('_list' if i == 0 else '_item')

def buildMethodValue(method_name, element_name, i):
    suffix = ''

    if i == 0:
        suffix = 'List'
    if i == 1:
        suffix = 'ById'

    return method_name + element_name + suffix