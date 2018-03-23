
function byCode(str, code=36) {
    return `\x1b[${code}m${str}\x1b[0m`;
}

module.exports = {
    byCode,
    light(str) { return byCode(str, 1) },
    dark(str) { return byCode(str, 2) },

    italic(str) { return byCode(str, 3) },
    underline(str) { return byCode(str, 4) },

    lightGrayBg(str) { return byCode(str, 7) },

    red(str) { return byCode(str, 31) },
    green(str) { return byCode(str, 32) },
    yellow(str) { return byCode(str, 33) },
    blue(str) { return byCode(str, 34) },
    violet(str) { return byCode(str, 35) },
    cyan(str) { return byCode(str, 36) },
    white(str) { return byCode(str, 37) },

    redBg(str) { return byCode(str, 31) },
    greenBg(str) { return byCode(str, 42) },
    yellowBg(str) { return byCode(str, 43) },
    blueBg(str) { return byCode(str, 44) },
    pinkBg(str) { return byCode(str, 45) },
    cyanBg(str) { return byCode(str, 46) },
    whiteBg(str) { return byCode(str, 47) },

    lightRed(str) { return byCode(str, 91) },
    lightGreen(str) { return byCode(str, 92) },
    lightYellow(str) { return byCode(str, 93) },
    lightBlue(str) { return byCode(str, 94) },
    lightViolet(str) { return byCode(str, 95) },
    lightCyan(str) { return byCode(str, 96) },
    lightWhite(str) { return byCode(str, 97) },

    lightRedBg(str) { return byCode(str, 101) },
    lightGreenBg(str) { return byCode(str, 102) },
    lightYellowBg(str) { return byCode(str, 103) },
    lightBlueBg(str) { return byCode(str, 104) },
    lightVioletBg(str) { return byCode(str, 105) },
    lightCyanBg(str) { return byCode(str, 106) },
    lightWhiteBg(str) { return byCode(str, 107) },
}
