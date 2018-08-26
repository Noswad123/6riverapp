
export const UPDATE_SETTINGS='settings:updateSettings';

export function updateSettings(settings){
    return{
        type:UPDATE_SETTINGS,
        payload:settings
    }
}