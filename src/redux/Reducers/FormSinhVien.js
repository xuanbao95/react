const stateDefault = {
    mangSinhVien: [{
        maSV: '1',
        tenSV: 'baobao',
        email: 'bao.lgx@gmail.com',
        sdt: '1231468476'
    }],
    sinhVienSua: {
        maSinhVien: '',
        hoTen: '',
        soDienThoai: '',
        email: ''
    }
}


export const formSinhVien = (state = stateDefault, action) => {
    console.log(action);
    switch (action.type) {
        case "BAM_THEM_SV_DI": {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien]
            return { ...state }
        };
        case "XOA_SV_DI": {
            state.mangSinhVien = state.mangSinhVien.filter(sv => sv.maSV != action.maSV);
            return { ...state }
        }
        case "SUA_SV_DI": {
            state.mangSinhVien = action.sinhVienSua;
        }
        default: return { ...state }
    }
}