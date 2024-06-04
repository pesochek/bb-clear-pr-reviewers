const evt = new MouseEvent("click", {
    button: 0,
    bubbles: true,
    cancelable: true,
    view: window
});

function removeLink() {
    let link = document.querySelector("div.fabric-user-picker__multi-value__remove span, button[data-testid='remove-reviewer-button']");
    if (!link) {
        return;
    }
    link.dispatchEvent(evt);
    // arbitrary delay to allow the link removal animation to complete
    setTimeout(removeLink, 500);
}

removeLink();
