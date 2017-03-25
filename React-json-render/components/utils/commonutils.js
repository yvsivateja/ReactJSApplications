import React from "react"

export function compileRequest(screenState, screenProps) {
    let serverRequest = {} // contains guid and salesForceRequest
    let salesForceRequest = {} // contains salesForceRequest
    let screenInputs = {} // contains userinputs
    screenProps.myform.screenFields.map((screenField, index) => {
        if (screenField.fieldType !== 'DISPLAY_TEXT') {
            if (screenField.fieldType === 'DROPDOWN') {
                screenInputs[screenField.name + "." + screenState[screenField.name] + ".selected"] = true
            } else {
                screenInputs[screenField.name] = screenState[screenField.name]
            }
        }
    })
    salesForceRequest['screenInputs'] = screenInputs
    salesForceRequest['action'] = screenState.actionClicked
    salesForceRequest['state'] = screenProps.myform.state

    serverRequest['SFRequest'] = salesForceRequest
    serverRequest['guid'] = screenProps.myform.guid
    return serverRequest
}

export function containsHTMLTags(inputVal) {
    let doc = new DOMParser().parseFromString(inputVal, "text/html")
    return Array.from(doc.body.childNodes).some(node => node.nodeType === 1)
}
