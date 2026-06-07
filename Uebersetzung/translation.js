
export async function uebersetzen(ausgangssprache, zielsprache, text) {
    const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${ausgangssprache}|${zielsprache}`
    );
    const data = await response.json();
    return data.responseData.translatedText;
}