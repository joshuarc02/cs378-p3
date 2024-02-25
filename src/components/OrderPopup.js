// https://getbootstrap.com/docs/5.0/components/modal/
const OrderPopup = ({counts, menuItems}) => {
    let order = []
    for(let i in counts) {
        let count = counts[i]
        let item = menuItems[i]
        if(count > 0){
            console.log(count)
            console.log(item)
            order.push(`${count} x ${item.title} for $${(count * item.price).toFixed(2)}`)
        }
    }
    if(order.length === 0){
        order.push('No items in cart!')
    }
    return (
        <div class="modal" id='orderPopup'>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Order Placed!</h5>
                    </div>
                    <div class="modal-body">
                        {order.length !== 0 ||
                            <p> No items in cart </p>
                        }
                        {order.length === 0 || 
                            (order.map((item) =>(
                                <p>{item}</p>
                            )))
                        }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {OrderPopup}