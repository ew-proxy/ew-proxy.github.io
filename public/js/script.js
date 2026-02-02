const answers_no = {
    english: [
        "No",
        "Asmita, you sure?",
        "What if I asked you really nicely??",
        "What if I said there is coffee involved???",
        "With chocoloate dessert?",
        "How about if we go for a theatre play too?",
        "Okayy maybe a musical then?",
        "But :*(",
        "Plss Asmita!",
        "Dil todh rahi hai yaar",
        ":(((((",
        "No :(",
        "No :(",
        "No :("
    ],
    french: [
        "Non",
        "Tu es sûr ?",
        "Tu es vraiment sûr ??",
        "Tu es vraiment vraiment sûr ???",
        "Réfléchis encore?",
        "Tu ne crois pas aux deuxièmes chances ?",
        "Pourquoi tu es si froid?",
        "Peut-être, on peut en parler ?",
        "Je ne vais pas demander encore une fois!",
        "D'accord, maintenant ca me fait mal!",
        "Tu es juste méchant!",
        "Pourquoi tu me fais ça?",
        "Donnez-moi une chance plz!",
        "Je te supplie d'arrêter!",
        "D'accord, recommençons.."
    ],
    thai: [
        "ไม่อ่ะ",
        "แน่ใจจริงๆหรอคะ?",
        "แน่ใจจริงๆ จริงๆนะคะ?",
        "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ?",
        "ลองคิดดูอีกทีหน่อยสิคะ..",
        "ขอโอกาศที่สองทีค่ะ..",
        "อย่าเย็นชาสิคะ กระซิกๆ",
        "ขอร้องนะคะ",
        "น้าาาๆๆๆๆๆ",
        "เราจะร้องไห้เอานะ กระซิกๆ",
        "จะเอางี้ๆจริงหรอคะ",
        "ฮือออออ",
        "ขอโอกาศครั้งที่สองที่ค่ะ!",
        "ขอร้องละค่าาา",
        "โอเคค่ะ.. งั้นเริ่มใหม่ !"
    ]
};

answers_yes = {
    "english": "Ofc",
    "french": "Oui",
    "Thailand": "เย่ คืนดีกันแล้วน้า"
}

const language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
const BASE_YES_BUTTON_SIZE = 60;
let size = BASE_YES_BUTTON_SIZE;
let clicks = 0;

function getButtonLabelEl(buttonEl) {
    let labelEl = buttonEl.querySelector('p');
    if (!labelEl) {
        labelEl = document.createElement('p');
        buttonEl.textContent = '';
        buttonEl.appendChild(labelEl);
    }
    return labelEl;
}

function setButtonLabel(buttonEl, text) {
    const labelEl = getButtonLabelEl(buttonEl);
    labelEl.textContent = text;
}

function setYesButtonSize(newSizePx) {
    size = newSizePx;
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    const fontSize = Math.max(22, Math.min(72, Math.round(size * 0.45)));
    yes_button.style.fontSize = `${fontSize}px`;
}

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    banner.src = "public/images/no.gif";
    refreshBanner();
    clicks++;
    // increase button height/width and scale font with it
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    setYesButtonSize(size + sizes[random]);
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        setButtonLabel(no_button, answers_no[language][i]);
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        setButtonLabel(no_button, answers_no[language][0]);
        setButtonLabel(yes_button, answers_yes[language]);
        setYesButtonSize(BASE_YES_BUTTON_SIZE);
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

// Ensure labels exist and match the default language.
setButtonLabel(yes_button, answers_yes[language]);
setButtonLabel(no_button, answers_no[language][0]);
setYesButtonSize(BASE_YES_BUTTON_SIZE);
