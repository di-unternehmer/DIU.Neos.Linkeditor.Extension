import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {$get, $transform} from "plow-js";

import {SelectBox} from "@neos-project/react-ui-components";
import {executeCommand} from "@neos-project/neos-ui-ckeditor5-bindings";

import {selectors} from "@neos-project/neos-ui-redux-store";

const categoryOptions = [
    {group: 'foo', label: 'bar'},
    {group: 'baz', label: 'baz'},
];

const locationOptions = [
    {group: 'foo', label: 'bar'},
    {group: 'baz', label: 'baz'},
];

@connect(
    $transform({
        formattingUnderCursor: selectors.UI.ContentCanvas.formattingUnderCursor
    })
)
export default class LinkEditorOptions extends PureComponent {
    static propTypes = {
        formattingUnderCursor: PropTypes.object,
        linkingOptions: PropTypes.object
    };

    state = {
        options: [],
        loading: false,
        error: false
    };

    fetchCache = null;

    componentDidMount() {
        this.setState({ loading: true, error: false });
        this.fetchOptions();
    }

    getLocation() {
        return $get("location", this.props.formattingUnderCursor) || "";
    }
    getCategory() {
        return $get("category", this.props.formattingUnderCursor) || "";
    }
    getInteractiontype() {
        return $get("interactiontype", this.props.formattingUnderCursor) || "";
    }

    fetchOptions = () => {
        if (!this.fetchCache) {
            this.fetchCache = fetch(
                // REPLACE WITH REAL URL
                "/_Resources/Static/test.json",
                { credentials: "include" }
            ).then((response) => response.json())
            .then(response => Object.values(response));
        }
        this.fetchCache
            .then((options) =>
                this.setState({ options, loading: false, error: false })
            )
            .catch((reason) => {
                console.error(reason);
                // Clear cache on error
                this.fetchCache = undefined;
                this.setState({ error: true, loading: false });
            });
      };

    render() {
        return $get('linkEditor', this.props.linkingOptions) ? (
            <div style={{flexGrow: 1}}>
                <div style={{padding: 8}}>
                    Interaction Type
                    <SelectBox
                        options={this.state.options}
                        optionValueField="label"
                        value={this.getInteractiontype()}
                        onValueChange={value => {
                            executeCommand("interactiontype", value, false);
                        }}
                        placeholder="Choose interactiontype"
                        allowEmpty={true}
                        displayLoadingIndicator={this.state.loading}
                    />
                </div>
                <div style={{padding: 8}}>
                    Category
                    <SelectBox
                        options={categoryOptions}
                        optionValueField="label"
                        value={this.getCategory()}
                        onValueChange={value => {
                            executeCommand("category", value, false);
                        }}
                        placeholder="Choose category"
                        allowEmpty={true}
                    />
                </div>
                <div style={{padding: 8}}>
                    Location
                    <SelectBox
                        options={locationOptions}
                        optionValueField="label"
                        value={this.getLocation()}
                        onValueChange={value => {
                            executeCommand("location", value, false);
                        }}
                        placeholder="Choose location"
                        allowEmpty={true}
                    />
                </div>
            </div>
        ) : null;
    }
}
