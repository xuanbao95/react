const statDefault = {
    gioHang: [],
}
export const gioHangReducer = (state = statDefault, action) => {//phải truyên tham số action thì switch mới hiểu có action
    switch (action.type) {
        case "THEM_GIO_HANG": {
            //xử lý thay đổi state
            let product = [...state.gioHang];
            let index = product.findIndex(sp => sp.maSP === action.productCart.maSP);//phải có sp.maSP vì khi bấm thêm hàm sẽ chạy từ trên xuống và kiểm tra dk if nếu ko có cùng maSP thì push, có thì += so lượng lên 
            if (index !== -1) {
                product[index].soLuong += 1;
            } else {
                product.push(action.productCart)
            }
            //cập nhật lại giỏ hàng
            state.gioHang = product;
            return { ...state };
        }
        case 'XOA_GIO_HANG': {
            let product = [...state.gioHang];
            product.splice(action.index, 1);
            state.gioHang = product;
            return { ...state }
        }
        case 'XOA_GIO_HANG_MASP': {
            let product = [...state.gioHang];
            let index = product.findIndex(sp => sp.maSP === action.maSP);
            if (index !== -1) {
                product.splice(action.index, 1);
            }

            state.gioHang = product;
            return { ...state }
        }
        case 'TANG_GIAM': {
            let { index, tangGiam } = action;
            let product = [...state.gioHang];
            // let index = product.findIndex(ma => ma.maSP == maSP)
            if (tangGiam === 1) {
                product[index].soLuong += 1;
            } else {
                product[index].soLuong -= 1;

            }
            state.gioHang = product;
            return { ...state }
        }
        default: {
            return { ...state };
        }
    }

    // return { ...state };
}