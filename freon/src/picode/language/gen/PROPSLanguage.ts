// Generated by the Freon Language Generator.
import {
    FreLanguage,
    FreLanguageModel,
    FreLanguageModelUnit,
    FreLanguageProperty,
    FreLanguageConcept,
    FreLanguageInterface,
    FreNodeReference
} from "@freon4dsl/core";

// Import as MyLanguage to avoid naming conflicts in generated constructors
import * as MyLanguage from "./internal";
import { PROPSStdlib } from "../../stdlib/gen/PROPSStdlib";

/**
 * Creates an in-memory representation of structure of the language metamodel, used in e.g. the (de)serializer.
 */
export function initializeLanguage() {
    FreLanguage.getInstance().name = "PROPS";
    FreLanguage.getInstance().id = "PROPS";
    FreLanguage.getInstance().addModel(describePROPS());
    FreLanguage.getInstance().addUnit(describePropertiesFile());
    FreLanguage.getInstance().addConcept(describeProperty());
    FreLanguage.getInstance().addConcept(describeValue());
    FreLanguage.getInstance().addConcept(describeBooleanValue());
    FreLanguage.getInstance().addConcept(describeDecValue());
    FreLanguage.getInstance().addConcept(describeIntValue());
    FreLanguage.getInstance().addConcept(describeStringValue());
    FreLanguage.getInstance().addInterface(describeINamed());
    FreLanguage.getInstance().addReferenceCreator((name: string, type: string) => {
        return !!name ? FreNodeReference.create(name, type) : null;
    });
    FreLanguage.getInstance().stdLib = PROPSStdlib.getInstance();
}

function describePROPS(): FreLanguageModel {
    const model = {
        typeName: "PROPS",
        id: "-default-id-PROPS",
        key: "-default-key-PROPS",
        isNamespace: true,
        language: "io-lionweb-props",
        constructor: (id?: string) => {
            return new MyLanguage.PROPS(id);
        },
        properties: new Map<string, FreLanguageProperty>()
    };
    model.properties.set("name", {
        name: "name",
        id: "TODO_set-correct-id",
        key: "TODO_set-correct-key",
        type: "string",
        isList: false,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "primitive"
    });
    model.properties.set("files", {
        name: "files",
        id: "-default-id-PROPS-files",
        key: "-default-key-PROPS-files",
        type: "PropertiesFile",
        isList: true,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "part"
    });

    return model;
}

function describePropertiesFile(): FreLanguageModelUnit {
    const modelunit = {
        typeName: "PropertiesFile",
        id: "io-lionweb-props_PropertiesFile",
        key: "io-lionweb-props_PropertiesFile",
        isNamedElement: true,
        language: "io-lionweb-props",
        fileExtension: "pro",
        subConceptNames: [], // Nothing yet, but may change in the future
        constructor: (id?: string) => {
            return new MyLanguage.PropertiesFile(id);
        },
        properties: new Map<string, FreLanguageProperty>(),
        trigger: "PropertiesFile"
    };
    modelunit.properties.set("name", {
        name: "name",
        id: "LionCore-builtins-INamed-name",
        key: "LionCore-builtins-INamed-name",
        type: "string",
        isList: false,
        isPublic: true,
        language: "-default-key-LionCore_builtins",
        propertyKind: "primitive"
    });
    modelunit.properties.set("props", {
        name: "props",
        id: "io-lionweb-props_PropertiesFile_props",
        key: "io-lionweb-props_PropertiesFile_props",
        type: "Property",
        isList: true,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "part"
    });

    return modelunit;
}

function describeProperty(): FreLanguageConcept {
    const concept = {
        typeName: "Property",
        id: "io-lionweb-props_Property",
        key: "io-lionweb-props_Property",
        isAbstract: false,
        isPublic: true,
        language: "io-lionweb-props",
        isNamedElement: true,
        trigger: "Property",
        constructor: (id?: string) => {
            return new MyLanguage.Property(id);
        },
        properties: new Map<string, FreLanguageProperty>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        id: "LionCore-builtins-INamed-name",
        key: "LionCore-builtins-INamed-name",
        type: "string",
        isList: false,
        isPublic: true,
        language: "-default-key-LionCore_builtins",
        propertyKind: "primitive"
    });
    concept.properties.set("value", {
        name: "value",
        id: "io-lionweb-props_Property_value",
        key: "io-lionweb-props_Property_value",
        type: "Value",
        isList: false,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "part"
    });

    return concept;
}

function describeValue(): FreLanguageConcept {
    const concept = {
        typeName: "Value",
        id: "io-lionweb-props_Value",
        key: "io-lionweb-props_Value",
        isAbstract: true,
        isPublic: undefined,
        language: "io-lionweb-props",
        isNamedElement: false,
        trigger: "Value",
        constructor: (id?: string) => {
            return null;
        },
        properties: new Map<string, FreLanguageProperty>(),
        baseName: null,
        subConceptNames: ["BooleanValue", "DecValue", "IntValue", "StringValue"]
    };

    return concept;
}

function describeBooleanValue(): FreLanguageConcept {
    const concept = {
        typeName: "BooleanValue",
        id: "io-lionweb-props_BooleanValue",
        key: "io-lionweb-props_BooleanValue",
        isAbstract: false,
        isPublic: true,
        language: "io-lionweb-props",
        isNamedElement: false,
        trigger: "BooleanValue",
        constructor: (id?: string) => {
            return new MyLanguage.BooleanValue(id);
        },
        properties: new Map<string, FreLanguageProperty>(),
        baseName: "Value",
        subConceptNames: []
    };
    concept.properties.set("value", {
        name: "value",
        id: "io-lionweb-props_BooleanValue_value",
        key: "io-lionweb-props_BooleanValue_value",
        type: "boolean",
        isList: false,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "primitive"
    });

    return concept;
}

function describeDecValue(): FreLanguageConcept {
    const concept = {
        typeName: "DecValue",
        id: "io-lionweb-props_DecValue",
        key: "io-lionweb-props_DecValue",
        isAbstract: false,
        isPublic: true,
        language: "io-lionweb-props",
        isNamedElement: false,
        trigger: "DecValue",
        constructor: (id?: string) => {
            return new MyLanguage.DecValue(id);
        },
        properties: new Map<string, FreLanguageProperty>(),
        baseName: "Value",
        subConceptNames: []
    };
    concept.properties.set("value", {
        name: "value",
        id: "io-lionweb-props_DecValue_value",
        key: "io-lionweb-props_DecValue_value",
        type: "string",
        isList: false,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "primitive"
    });

    return concept;
}

function describeIntValue(): FreLanguageConcept {
    const concept = {
        typeName: "IntValue",
        id: "io-lionweb-props_IntValue",
        key: "io-lionweb-props_IntValue",
        isAbstract: false,
        isPublic: true,
        language: "io-lionweb-props",
        isNamedElement: false,
        trigger: "IntValue",
        constructor: (id?: string) => {
            return new MyLanguage.IntValue(id);
        },
        properties: new Map<string, FreLanguageProperty>(),
        baseName: "Value",
        subConceptNames: []
    };
    concept.properties.set("value", {
        name: "value",
        id: "io-lionweb-props_IntValue_value",
        key: "io-lionweb-props_IntValue_value",
        type: "number",
        isList: false,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "primitive"
    });

    return concept;
}

function describeStringValue(): FreLanguageConcept {
    const concept = {
        typeName: "StringValue",
        id: "io-lionweb-props_StringValue",
        key: "io-lionweb-props_StringValue",
        isAbstract: false,
        isPublic: true,
        language: "io-lionweb-props",
        isNamedElement: false,
        trigger: "StringValue",
        constructor: (id?: string) => {
            return new MyLanguage.StringValue(id);
        },
        properties: new Map<string, FreLanguageProperty>(),
        baseName: "Value",
        subConceptNames: []
    };
    concept.properties.set("value", {
        name: "value",
        id: "io-lionweb-props_StringValue_value",
        key: "io-lionweb-props_StringValue_value",
        type: "string",
        isList: false,
        isPublic: true,
        language: "io-lionweb-props",
        propertyKind: "primitive"
    });

    return concept;
}

function describeINamed(): FreLanguageInterface {
    const intface = {
        typeName: "INamed",
        id: "LionCore-builtins-INamed",
        key: "LionCore-builtins-INamed",
        isPublic: true,
        isNamedElement: true,
        properties: new Map<string, FreLanguageProperty>(),
        language: "LionCore_builtins",
        subConceptNames: ["Property"]
    };
    intface.properties.set("name", {
        name: "name",
        id: "LionCore-builtins-INamed-name",
        key: "LionCore-builtins-INamed-name",
        type: "string",
        isList: false,
        isPublic: true,
        language: "LionCore_builtins",
        propertyKind: "primitive"
    });

    return intface;
}
