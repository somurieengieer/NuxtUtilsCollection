import axios from 'axios'
const BASE_URL =
  'https://script.google.com/macros/s/AKfycbxmebaYjY2Prc0LnDNhMQZSwKkqjPl4D62Sp07rUHzTXF3XEjQ/exec'

// ====================================================
// axios/GoogleAppsScript使用時のメモ
// GoogleAppsScriptのCORSの設定が必要。
// Webアプリケーションとして導入...の後、Who has access to the appの選択肢を
//   Anyone, even anonymousにする。（全ユーザーだとNG）
// ====================================================

const urlFromGetParameter = (baseUrl, params) => {
  const paramStr = Object.entries(params)
    .map((e) => `${e[0]}=${e[1]}`)
    .join('&')
  return `${baseUrl}?${paramStr}`
}

const axiosFrom = async (url) => {
  const res = await axios.get(url).then(
    (res) => {
      if (res.status !== 200) {
        console.log('res is not 200: ', res)
        return null
      }
      return res.data.text
    },
    () => {
      console.log('axios error')
      return null
    }
  )
  return res
}

/**
 * source should be 'ja' or 'en'
 */
export async function translateFrom(sourceText, sourceLanguage) {
  const params = {
    text: sourceText,
    source: sourceLanguage,
    target: targetLanguageFrom(sourceLanguage)
  }
  return await axiosFrom(urlFromGetParameter(BASE_URL, params))
}

export function targetLanguageFrom(sourceLanguage) {
  return sourceLanguage === 'ja' ? 'en' : 'ja'
}
