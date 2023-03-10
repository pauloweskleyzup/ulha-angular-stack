import { {{ failure_model }} } from "./{{ filename }}-failure.model";

export interface AbstractFetchStateModel {
    failure: {{ failure_model }} | null;
    loading: boolean | null;
}
