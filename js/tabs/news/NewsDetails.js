import React, { Component } from 'react';
import { Platform, WebView } from 'react-native';

import format from 'date-fns/format';

import Colors from '../../util/Colors';

export default class NewsDetails extends Component {
  render() {
    const fontSize = Platform.OS === 'ios' ? 'font-size: 42px;' : '';
    let {
      heading,
      subheading,
      imgUrl,
      body,
      time,
      attachments
    } = this.props.navigation.getParam('news');
    let topic = this.props.navigation.getParam('topic');
    let timeHeading = '';
    if (topic === 'events') {
      timeHeading = `<h3>${format(
        new Date(time),
        'DD.MM.YYYY HH:mm'
      )} Uhr</h3>`;
    }
    if (body === subheading) subheading = '';
    // HACK/TODO: prevent changes in font size (affects iOS)
    body = body.replace(/font-size:/g, 'fs');
    // Remove target="_blank" in URLs (otherwise they won't work on iOS)
    body = body.replace(/target="_blank"/g, '');
    let attachmentFooter = '';
    if (attachments && attachments.length >= 1) {
      let attachmentsHTML = '';
      attachments.forEach(attachment => {
        let url = attachment.url;
        // on Android use embedded Google docs viewer for PDFs (WebView won't work)
        // see https://github.com/facebook/react-native/issues/6488
        if (url.slice(-4) === '.pdf' && Platform.OS === 'android')
          url = 'http://docs.google.com/gview?embedded=true&url=' + url;
        attachmentsHTML += `${attachment.title} <br/> 
        <a href='${url}'>Herunterladen (${attachment.size})</a> 
        <br/>
        <br/>`;
      });
      attachmentFooter = `<p>
        <b>Anhänge</b> <br/> <br/>
        ${attachmentsHTML}        
        </p>`;
    }
    const HTML = `
        <!DOCTYPE html>\n
        <html>
          <head>
            <style>
              body {font-family: -apple-system; ${fontSize} }
              h1 {color: ${Colors.dhbwRed};}
            </style>
          </head>
          <body>
            ${timeHeading}
            <h1>${heading}</h1>
            <h2>${subheading}</h2>
            <img src="${imgUrl}" width="100%">
            ${body}
            ${attachmentFooter}
          </body>
        </html>
    `;

    return (
      <WebView useWebKit={true} source={{ html: HTML }} bounces={false} />
    );
  }
}
