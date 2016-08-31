/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Renderer','sap/ui/core/ValueStateSupport','sap/ui/core/IconPool'],function(q,R,V,I){"use strict";var S={};S.CSS_CLASS="sapMSlt";S.render=function(r,s){var t=V.enrichTooltip(s,s.getTooltip_AsString()),T=s.getType(),a=s.getAutoAdjustWidth(),e=s.getEnabled(),C=S.CSS_CLASS;r.write("<div");this.addClass(r,s);r.addClass(C);r.addClass(C+s.getType());if(!e){r.addClass(C+"Disabled");}if(a){r.addClass(C+"AutoAdjustedWidth");}else{r.addStyle("width",s.getWidth());}if(s.getIcon()){r.addClass(C+"WithIcon");}if(e&&sap.ui.Device.system.desktop){r.addClass(C+"Hoverable");}r.addClass(C+"WithArrow");r.addStyle("max-width",s.getMaxWidth());r.writeControlData(s);r.writeStyles();r.writeClasses();this.writeAccessibilityState(r,s);if(t){r.writeAttributeEscaped("title",t);}else if(T===sap.m.SelectType.IconOnly){var i=I.getIconInfo(s.getIcon());if(i){r.writeAttributeEscaped("title",i.text);}}if(e){r.writeAttribute("tabindex","0");}r.write(">");this.renderLabel(r,s);switch(T){case sap.m.SelectType.Default:this.renderArrow(r,s);break;case sap.m.SelectType.IconOnly:this.renderIcon(r,s);break;}if(s._isRequiredSelectElement()){this.renderSelectElement(r,s);}r.write("</div>");};S.renderLabel=function(r,s){var o=s.getSelectedItem(),t=s.getTextDirection(),T=R.getTextAlign(s.getTextAlign(),t);r.write("<label");r.writeAttribute("id",s.getId()+"-label");r.writeAttribute("for",s.getId());r.addClass(S.CSS_CLASS+"Label");if(s.getType()===sap.m.SelectType.IconOnly){r.addClass("sapUiPseudoInvisibleText");}if(t!==sap.ui.core.TextDirection.Inherit){r.writeAttribute("dir",t.toLowerCase());}if(T){r.addStyle("text-align",T);}r.writeStyles();r.writeClasses();r.write(">");r.writeEscaped(o?o.getText():"");r.write('</label>');};S.renderArrow=function(r,s){r.write('<span class="'+S.CSS_CLASS+'Arrow"');r.writeAttribute("id",s.getId()+"-arrow");r.write("></span>");};S.renderIcon=function(r,s){r.writeIcon(s.getIcon(),S.CSS_CLASS+"Icon",{id:s.getId()+"-icon",title:null});};S.renderSelectElement=function(r,s){var n=s.getName(),o=s.getSelectedItem(),a=o?o.getText():"";r.write('<select class="'+S.CSS_CLASS+"Native"+'"');if(n){r.writeAttributeEscaped("name",n);}r.writeAttribute("id",s.getId()+"-select");r.writeAttribute("aria-hidden","true");r.writeAttribute("tabindex","-1");r.write(">");this.renderOptions(r,s,a);r.write("</select>");};S.renderOptions=function(r,s,a){var b=s.getItems(),c=b.length,i=0;for(;i<c;i++){r.write("<option>");r.writeEscaped(b[i].getText());r.write("</option>");}if(c===0){r.write("<option>");r.writeEscaped(a);r.write("</option>");}};S.addClass=function(r,s){};S.getAriaRole=function(s){switch(s.getType()){case sap.m.SelectType.Default:return"combobox";case sap.m.SelectType.IconOnly:return"button";}};S.writeAccessibilityState=function(r,s){r.writeAccessibilityState(s,{role:this.getAriaRole(s),expanded:s.isOpen(),live:"polite",labelledby:{value:s.getId()+"-label",append:true}});};return S;},true);
