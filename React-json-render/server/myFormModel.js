var myFormModel = {
    getinitdata: function() {
        var interviewResponseBody = [
            {
                "availableActions": [
                    {
                        "id": "NEXT",
                        "label": "Next"
                    }
                ],
                "errorMessages": [],
                "flowLabel": "Advisor-to-Client Onboarding Flow",
                "guid": "869369a2912430802ba61f8e67b015ac9f8c369-69b6",
                "helpText": null,
                "interviewStatus": "STARTED",
                "outputVariables": [],
                "pausedText": null,
                "screenFields": [
                    {
                        "choices": null,
                        "dataType": "STRING",
                        "errorMessages": null,
                        "fieldType": "DISPLAY_TEXT",
                        "helpText": null,
                        "isRequired": false,
                        "isValidValue": true,
                        "label": "(Stripped) Welcome to the new KYC Wizard! This Wizard will walk you through the process of setting up a new Client.",
                        "name": "KYCWizardDesc",
                        "triggersUpdate": false,
                        "value": null
                    }, {
                        "choices": null,
                        "dataType": "STRING",
                        "errorMessages": null,
                        "fieldType": "INPUT",
                        "helpText": "Please enter the four digit Advisor code.",
                        "isRequired": false,
                        "isValidValue": true,
                        "label": "Advisor Code",
                        "name": "Advisor_Code",
                        "triggersUpdate": false,
                        "value": ""
                    }, {
                        "choices": null,
                        "dataType": "BOOLEAN",
                        "errorMessages": null,
                        "fieldType": "INPUT",
                        "helpText": null,
                        "isRequired": true,
                        "isValidValue": true,
                        "label": "I/We the Advisor have met the Applicant(s)",
                        "name": "Met_the_Applicant",
                        "triggersUpdate": false,
                        "value": null
                    }, {
                        "choices": null,
                        "dataType": "NUMBER",
                        "errorMessages": null,
                        "fieldType": "INPUT",
                        "helpText": "If just met enter zero.",
                        "isRequired": false,
                        "isValidValue": true,
                        "label": "Years Known the Applicant?",
                        "name": "Years_Known_the_Applicant",
                        "triggersUpdate": false,
                        "value": 0
                    }, {
                        "choices": [
                            {
                                "isSelected": false,
                                "label": "Yes",
                                "name": "Yes",
                                "text": "",
                                "userInput": null
                            }, {
                                "isSelected": false,
                                "label": "No",
                                "name": "No",
                                "text": "",
                                "userInput": null
                            }
                        ],
                        "dataType": "STRING",
                        "errorMessages": null,
                        "fieldType": "RADIO_BUTTONS",
                        "helpText": null,
                        "isRequired": false,
                        "isValidValue": true,
                        "label": "I/We the Advisor are registerred in the province or country where the Applicant resides",
                        "name": "Advisor_Client_Reside_same_Country",
                        "triggersUpdate": false,
                        "value": null
                    }
                ],
                "screenName": "KYC_Wizard",
                "state": "rO0ABXNyACRpbnRlcmFjdGlvbi5lbmdpbmUuYXBpLkludGVydmlld0ltcGwAAAAAAAAAAQIADFoACnNob3dFcnJvcnNMAAdhY3Rpb25zdAAQTGphdmEvdXRpbC9MaXN0O0wADWVycm9yTWVzc2FnZXNxAH4AAUwABmVycm9yc3QAD0xqYXZhL3V0aWwvTWFwO0wABmZpZWxkc3EAfgABTAAIaGVscFRleHR0ABJMamF2YS9sYW5nL1N0cmluZztMAAlpbnRlcnZpZXd0AChMaW50ZXJhY3RpbA=="
            }
        ];
        return {results: interviewResponseBody};
    }
}

module.exports = myFormModel
