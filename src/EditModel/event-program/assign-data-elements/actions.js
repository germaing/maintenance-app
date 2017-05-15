export const PROGRAM_STAGE_DATA_ELEMENTS_ADD = 'PROGRAM_STAGE_DATA_ELEMENTS_ADD';
export const PROGRAM_STAGE_DATA_ELEMENTS_REMOVE = 'PROGRAM_STAGE_DATA_ELEMENTS_REMOVE';
export const PROGRAM_STAGE_DATA_ELEMENTS_ADDREMOVE_COMPLETE = 'PROGRAM_STAGE_DATA_ELEMENTS_ADDREMOVE_COMPLETE';
export const PROGRAM_STAGE_DATA_ELEMENT_EDIT = 'PROGRAM_STAGE_DATA_ELEMENT_EDIT';
export const PROGRAM_STAGE_DATA_ELEMENT_EDIT_COMPLETE = 'PROGRAM_STAGE_DATA_ELEMENTS_EDIT_COMPLETE';

const actionCreator = type => payload => ({ type, payload });

export const addDataElementsToStage = actionCreator(PROGRAM_STAGE_DATA_ELEMENTS_ADD);
export const removeDataElementsFromStage = actionCreator(PROGRAM_STAGE_DATA_ELEMENTS_REMOVE);

export const editProgramStageDataElement = actionCreator(PROGRAM_STAGE_DATA_ELEMENT_EDIT);
