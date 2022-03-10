const KEY_TEXTAREA_STORAGE = "key_textarea_storage"

export function setTextAreaValue(str) {
  localStorage.setItem(KEY_TEXTAREA_STORAGE, str)
}

export function getTextAreaValue() {
  return localStorage.getItem(KEY_TEXTAREA_STORAGE)
}