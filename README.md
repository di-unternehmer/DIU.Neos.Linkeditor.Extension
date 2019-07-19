# DIU.Neos.Linkeditor.Extension

Extends the Neos CKE5 linkeditor with additional data attributes

Enable additional linking options with such config:

```
"Neos.NodeTypes.BaseMixins:TextMixin":
  properties:
    text:
      ui:
        inline:
          editorOptions:
            linking:
              linkEditor: true
```
