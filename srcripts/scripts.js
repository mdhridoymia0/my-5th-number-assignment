const allSeats = document.getElementById ('allSeats')

const seatButton = document.getElementsByClassName('seatButton')

const appendedSection = document.getElementById('appended-section')

const apply = document.getElementById('apply')

const visiblePopup = document.getElementById('success-popup')

let updateTotalPrice = 0
let seatCount = 0
let isSelected = false
let isTyped = false

for (const seat of seatButton) {

    seat.addEventListener('click', function () {

        if (seatCount < 4) {
            seat.classList.add('btnBgColorChanged')
            seat.classList.add('text-white')
            seat.classList.remove('bg-[#F7F8F8]')
            seat.setAttribute('disabled', '')

            seatCount = seatCount + 1
            setInnerTextWithIdAndValue('selected-seat-count', seatCount)

            const remainingSeat = getInnerTextValueFromId('remaining-seat')
            const updatedRemainingSeat = remainingSeat - 1
            setInnerTextWithIdAndValue('remaining-seat', updatedRemainingSeat)

            const div = document.createElement('div')
            div.classList.add("my-2", "flex", "justify-between", "text-[rgba(3,7,18,0.6)]")

            const ticketPricePerSeat = getInnerTextValueFromId('ticket-price-per-seat')
            const p1 = document.createElement('p')
            const seatText = seat.innerText
            p1.innerText = seatText;

            const p2 = document.createElement('p')
            p2.innerText = 'Economy';

            const p3 = document.createElement('p')
            p3.innerText = ticketPricePerSeat;
            div.append(p1, p2, p3)
            appendedSection.appendChild(div)

            updateTotalPrice = seatCount * ticketPricePerSeat
            setInnerTextWithIdAndValue('total-price', updateTotalPrice)
            const grandFinal = updateTotalPrice
            setInnerTextWithIdAndValue('grand-total', grandFinal)

            isSelected = true

            if (seatCount === 4) {
                apply.removeAttribute('disabled')
            }
            else {
                apply.setAttribute('disabled', true)
            }
        }
        else {
            alert("You can't select more seat!!!")
        }
    })
}

const hide = document.getElementById('hide-hobe')

apply.addEventListener('click', function () {

    const new15Coupon = getInnerTextFromId('new15')
    const couple20Coupon = getInnerTextFromId('couple20')
    const couponInputValue = getInputValueFromId('input-coupon')

    if (couponInputValue === new15Coupon) {
        const grandTotal15 = updateTotalPrice * 0.15
        const grandFinal = updateTotalPrice - grandTotal15
        setInnerTextWithIdAndValue('grand-total', grandFinal)
        hide.classList.add('hidden')
        setValueWithIdAndValue('input-coupon', '')
        apply.setAttribute('disabled', true)
    }
    else if (couponInputValue === couple20Coupon) {

        const grandTotal20 = updateTotalPrice * 0.2
        const grandFinal = updateTotalPrice - grandTotal20
        setInnerTextWithIdAndValue('grand-total', grandFinal)
        hide.classList.add('hidden')
        setValueWithIdAndValue('input-coupon', '')
        apply.setAttribute('disabled', true)
    }
    else {
        alert("Your coupon code isn't correct")
    }
})

// function start 

function typeCheck() {
    isTyped = true
}

function nextChanged() {

    if (isSelected === true && isTyped === true) {

        visiblePopup.classList.remove('hidden')
        seatCount = 0
        setInnerTextWithIdAndValue('selected-seat-count', seatCount)
        appendedSection.innerHTML = ''
        updateTotalPrice = 0
        grandFinal = 0
        setInnerTextWithIdAndValue('total-price', updateTotalPrice)
        setInnerTextWithIdAndValue('grand-total', grandFinal)
        hide.classList.remove('hidden')
        apply.setAttribute('disabled', true)
        setValueWithIdAndValue('required', '')
        isSelected = false
        isTyped = false
    } else {
        alert('Please select atleast 1 seat and must type phone number.')
    }
}

function continueHide() {
    visiblePopup.classList.add('hidden')
}


function getInnerTextValueFromId(elementId) {

    const element = document.getElementById(elementId)
    const elementValue = parseInt(element.innerText)
    return elementValue
}


function getInnerTextFromId(elementId) {
    
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    return elementText
}


function setInnerTextWithIdAndValue(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}
function setValueWithIdAndValue(elementId, valueNew) {
    const element = document.getElementById(elementId)
    element.value = valueNew
}


function getInputValueFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = element.value
    return elementValue
}