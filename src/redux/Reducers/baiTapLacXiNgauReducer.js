const stateDefault = {
    xiNgau: [
        { so: 1, img: "./img/imgGame/1.png" },
        { so: 2, img: "./img/imgGame/2.png" },
        { so: 3, img: "./img/imgGame/3.png" }
    ],
    soBanThang: 0,
    tongBanChoi: 0,
    taiXiu: true,
}

export const baiTapLacXiNgau = (state = stateDefault, action) => {
    console.log(action);
    switch (action.type) {
        case "BET_DI": {
            state.taiXiu = action.taiXiu;
            return { ...state }
        };
        case "CHOI_DI": {
            let arrXiNgau = [];
            for (let i = 0; i < 3; i++) {
                let randomNumber = Math.floor(Math.random() * 6) + 1;
                let xiNgauMoi = { so: randomNumber, img: `./img/imgGame/${randomNumber}.png` }
                arrXiNgau.push(xiNgauMoi);
            }
            state.xiNgau = arrXiNgau;
            state.tongBanChoi += 1;
            let tongSoDiem = arrXiNgau.reduce((tongDiem, xiNgau, index) => {
                return tongDiem += xiNgau.so;
            }, 0)
            if ((tongSoDiem > 12 && state.taiXiu === true) || (tongSoDiem < 11 && state.taiXiu === false)) {
                state.soBanThang += 1
            }
            return { ...state }
        }
        default: return { ...state }
    }
}
