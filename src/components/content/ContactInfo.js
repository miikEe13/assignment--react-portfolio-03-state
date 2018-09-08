import React, { Component } from 'react';
import Item from './info/Item'

class ContactInfo extends Component {
    render() {
        return (
            <section>
                <div className="contactinfo">
                    <Item title="CDMX, Mexico" icon="ion-ios-location-outline"/>
                    <Item title="masramirez12@gmail.com" icon="ion-ios-email-outline"/>
                    <Item title="miikEe13" icon="ion-social-github-outline"/>
                    <Item title="miguel-angel-ramirez-medel-997b7066" icon="ion-social-linkedin-outline"/>
                </div>
            </section>
        )
    }
}
export default ContactInfo;