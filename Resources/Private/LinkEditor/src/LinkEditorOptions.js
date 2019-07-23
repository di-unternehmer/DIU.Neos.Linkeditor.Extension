import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {$get, $transform} from "plow-js";

import {SelectBox} from "@neos-project/react-ui-components";
import {executeCommand} from "@neos-project/neos-ui-ckeditor5-bindings";

import {selectors} from "@neos-project/neos-ui-redux-store";

const categoryOptions = [
    {group: 'clickout', label: 'click'},
    {group: 'clickout', label: 'clickout'},
    {group: 'clickout', label: 'clickout_ep'},
    {group: 'clickout', label: 'clickout_wlw'},
    {group: 'interaction', label: 'interaction_search'},
    {group: 'interaction', label: 'interaction_contact_phone'},
    {group: 'interaction', label: 'interaction_contact_mail'},
    {group: 'interaction', label: 'interaction_social'},
    {group: 'interaction', label: 'interaction'},
];

const locationOptions = [
    {group: 'module', label: 'contact_module'},
    {group: 'module', label: 'offer_module'},
    {group: 'module', label: 'video_module'},
    {group: 'other', label: 'navigation'},
    {group: 'other', label: 'content'},
    {group: 'other', label: 'footer'},
    {group: 'other', label: 'stage'},
    {group: 'other', label: 'sidebar'},
];

const interactiontypeOptions = [
    {group: 'share', label: 'share_facebook'},
    {group: 'share', label: 'share_youtube'},
    {group: 'share', label: 'share_xing'},
    {group: 'share', label: 'share_linkedin'},
    {group: 'share', label: 'share_twitter'},
    {group: 'follow', label: 'follow_facebook'},
    {group: 'follow', label: 'follow_youtube'},
    {group: 'follow', label: 'follow_xing'},
    {group: 'follow', label: 'follow_linkedin'},
    {group: 'follow', label: 'follow_twitter'},
    {group: 'lead', label: 'lead_cdo_step1'},
    {group: 'lead', label: 'lead_cdo_step2'},
    {group: 'lead', label: 'lead_cdo_step3'},
    {group: 'lead', label: 'lead_cdo_step4'},
    {group: 'lead', label: 'lead_lyc'},
    {group: 'lead', label: 'lead_form_start'},
    {group: 'lead', label: 'lead_form_confirm'},
    {group: 'lead', label: 'lead_phone'},
    {group: 'lead', label: 'lead_mail'},
    {group: 'lead', label: 'lead_button'},
    {group: 'job', label: 'job_interest'},
    {group: 'job', label: 'job_application'},
    {group: 'newsletter', label: 'newsletter_send'},
    {group: 'newsletter', label: 'newsletter_start'},
    {group: 'traffic', label: 'traffic_button'},
    {group: 'traffic', label: 'traffic_logo'},
    {group: 'teaser', label: 'teaser_article_button'},
    {group: 'teaser', label: 'teaser_career_jobboard_button'},
    {group: 'teaser', label: 'teaser_career_tech-product_button'},
    {group: 'teaser', label: 'teaser_career_data-bi_button'},
    {group: 'teaser', label: 'teaser_career_sales-marketing-button'},
    {group: 'teaser', label: 'teaser_career_hr-finance_button'},
    {group: 'video', label: 'video_open'},
    {group: 'video', label: 'video_play'},
    {group: 'video', label: 'video_pause'},
    {group: 'video', label: 'video_25'},
    {group: 'video', label: 'video_50'},
    {group: 'video', label: 'video_75'},
    {group: 'video', label: 'video_watch_to_end'},
    {group: 'link', label: 'link'},
    {group: 'link', label: 'result_link'},
    {group: 'other', label: 'corpcomm_mail'},
    {group: 'other', label: 'customer_login'},
    {group: 'other', label: 'start_search'},
    {group: 'other', label: 'recruiting_mail'},
    {group: 'other', label: 'reference'},
]

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

    getLocation() {
        return $get("location", this.props.formattingUnderCursor) || "";
    }
    getCategory() {
        return $get("category", this.props.formattingUnderCursor) || "";
    }
    getInteractiontype() {
        return $get("interactiontype", this.props.formattingUnderCursor) || "";
    }

    render() {
        return $get('linkEditor', this.props.linkingOptions) && (
            <div style={{flexGrow: 1}}>
                <div style={{padding: 8}}>
                    Interaction Type
                    <SelectBox
                        options={interactiontypeOptions}
                        optionValueField="label"
                        value={this.getInteractiontype()}
                        onValueChange={value => {
                            executeCommand("interactiontype", value, false);
                        }}
                        placeholder="Choose interactiontype"
                        allowEmpty={true}
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
        );
    }
}
