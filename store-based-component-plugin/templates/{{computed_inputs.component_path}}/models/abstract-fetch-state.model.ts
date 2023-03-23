import { {{entity_failure_model_pascalcase}} } from './{{entity_failure_model_filename}}-failure.model';

export interface AbstractFetchStateModel {
    failure: {{entity_failure_model_pascalcase}} | null;
    loading: boolean | null;
}
