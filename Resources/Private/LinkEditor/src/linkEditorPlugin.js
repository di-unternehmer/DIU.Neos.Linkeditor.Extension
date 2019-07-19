import {Plugin} from "ckeditor5-exports";
import LinkAttributeCommand from "./linkAttributeCommand";

export default class LinkEditorPlugin extends Plugin {
    static get pluginName() {
        return "LinkEditor";
    }

    init() {
        const editor = this.editor;
        editor.model.schema.extend("$text", {
            allowAttributes: ["location", "category", "interactiontype"]
        });

        // location
        editor.conversion.for("downcast").attributeToElement({
            model: "location",
            view: (location, writer) => {
                const linkElement = writer.createAttributeElement(
                    "a",
                    {"data-location": location},
                    {priority: 5}
                );
                return linkElement;
            }
        });
        editor.conversion.for("upcast").elementToAttribute({
            view: {
                name: "a",
                attributes: {
                    "data-location": true
                }
            },
            model: {
                key: "location",
                value: viewElement => viewElement.getAttribute("data-location")
            }
        });

        // category
        editor.conversion.for("downcast").attributeToElement({
            model: "category",
            view: (category, writer) => {
                const linkElement = writer.createAttributeElement(
                    "a",
                    {"data-category": category},
                    {priority: 5}
                );
                return linkElement;
            }
        });
        editor.conversion.for("upcast").elementToAttribute({
            view: {
                name: "a",
                attributes: {
                    "data-category": true
                }
            },
            model: {
                key: "category",
                value: viewElement => viewElement.getAttribute("data-category")
            }
        });

        // interactiontype
        editor.conversion.for("downcast").attributeToElement({
            model: "interactiontype",
            view: (interactiontype, writer) => {
                const linkElement = writer.createAttributeElement(
                    "a",
                    {"data-interactiontype": interactiontype},
                    {priority: 5}
                );
                return linkElement;
            }
        });
        editor.conversion.for("upcast").elementToAttribute({
            view: {
                name: "a",
                attributes: {
                    "data-interactiontype": true
                }
            },
            model: {
                key: "interactiontype",
                value: viewElement =>
                    viewElement.getAttribute("data-interactiontype")
            }
        });

        editor.commands.add(
            "location",
            new LinkAttributeCommand(this.editor, "location")
        );
        editor.commands.add(
            "category",
            new LinkAttributeCommand(this.editor, "category")
        );
        editor.commands.add(
            "interactiontype",
            new LinkAttributeCommand(this.editor, "interactiontype")
        );
    }
}
