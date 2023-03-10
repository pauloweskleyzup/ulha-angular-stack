import os
import shutil
from templateframework.metadata import Metadata

eventPreffixes = ['Get', 'Get', 'Post', 'Put', 'Delete']
eventSuffixes = ['', 'Success', 'Failure']

def run(metadata: Metadata = None):
    computedInputs = metadata.computed_inputs
    entityName = str(metadata.computed_inputs['entity_pascal'])
    buildEventsName(computedInputs, entityName)
    return metadata
             
def buildEventsName(computedInputs, entityName):
    for i in range(len(eventPreffixes)):
        preffix = eventPreffixes[i]

        for j in range(len(eventSuffixes)):
            suffix = eventSuffixes[j]
            eventVar = buildEventVar(preffix, suffix, i) 
            eventValue = buildEventValue(preffix, suffix, entityName, i, j)            
            computedInputs[eventVar] = eventValue 

def buildEventVar(preffix, suffix, i):
    entityType = '_list' if i == 0 else '_item'
    suffix = ( '_' + suffix.lower() ) if suffix != '' else ''
    return 'evt_' + preffix.lower() + entityType + suffix

def buildEventValue(preffix, suffix, entityName, i, j):
    endEntityName = 's' if i == 0 else ''
    suffix = ( ' ' + suffix ) if j != 0 else ''
    return preffix + ' ' + entityName + endEntityName + suffix