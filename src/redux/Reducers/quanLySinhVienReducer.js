const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, hoTen: "baobao", soDienThoai: "23030616", email: "bao02145@" },
    ],//dử liệu sinh viên của table,
    suaSinhVien: {
        maSinhVien: '',
        hoTen: '',
        email: '',
        soDienThoai: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "BAM_THEM_SV": {
            //thêm action sinh vien và state=>cập nhật lai state
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state }
        }
        case "XOA_SV": {
            state.mangSinhVien = state.mangSinhVien.filter(sv => sv.maSinhVien != action.sv)
            return { ...state }
        }
        case "SUA_SV": {
            state.suaSinhVien = action.sinhVienSua;
            return { ...state }
        }
        case "CAP_NHAT_SV": {
            let mangSVCapNhat = [...state.mangSinhVien];
            //tìm ra sinh vien có mã gióng vs sinh vien sủa trong mảng
            let svCapNhat = mangSVCapNhat.find(sv => sv.maSinhVien === action.sinhVienCapNhat.maSinhVien)
            if (svCapNhat) {
                svCapNhat.email = action.sinhVienCapNhat.email;
                svCapNhat.maSinhVien = action.sinhVienCapNhat.maSinhVien;
                svCapNhat.hoTen = action.sinhVienCapNhat.hoTen;
                svCapNhat.soDienThoai = action.sinhVienCapNhat.soDienThoai;
            }
            //cập nhật lại state mảng sinh viên
            state.mangSinhVien = mangSVCapNhat;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
