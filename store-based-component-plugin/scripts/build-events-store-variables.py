import os
import shutil
from templateframework.metadata import Metadata

event_preffixes = ['Get', 'Get', 'Post', 'Put', 'Delete']
event_suffixes = ['', 'Success', 'Failure']

def run(metadata: Metadata = None):
    computed_inputs = metadata.computed_inputs
    entity_name = str(metadata.computed_inputs['entity_store_pascalcase'])
    buildEventsName(computed_inputs, entity_name)
    return metadata

def buildEventsName(computed_inputs, entity_name):
    for i in range(len(event_preffixes)):
        preffix = event_preffixes[i]

        for j in range(len(event_suffixes)):
            suffix = event_suffixes[j]
            event_var = buildEventVar(preffix, suffix, i)
            event_value = buildEventValue(preffix, suffix, entity_name, i, j)
            computed_inputs[event_var] = event_value

def buildEventVar(preffix, suffix, i):
    entity_type = '_list' if i == 0 else '_item'
    suffix = ( '_' + suffix.lower() ) if suffix != '' else ''
    return 'evt_' + preffix.lower() + entity_type + suffix

def buildEventValue(preffix, suffix, entity_name, i, j):
    end_entity_name = ' List' if i == 0 else ''
    suffix = ( ' ' + suffix ) if j != 0 else ''
    return preffix + ' ' + entity_name + end_entity_name + suffix