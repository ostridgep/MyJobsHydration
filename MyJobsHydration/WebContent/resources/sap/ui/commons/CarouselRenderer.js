/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var C={};C.render=function(r,c){var a=r;var R=sap.ui.getCore().getConfiguration().getRTL();a.write("<div");a.addClass("sapUiCrsl");if(c.getWidth()!=""){a.addStyle("width",c.getWidth());}if(c.getHeight()!=""){a.addStyle("height",c.getHeight());}a.writeStyles();a.writeClasses();a.writeControlData(c);a.write(">");var b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");a.write("<div");a.writeAttribute("id",c.getId()+"-prevbutton");a.writeAttribute("title",b.getText("CAROUSEL_SHOW_PREV"));a.addClass("sapUiCrslPrevBtn");a.writeClasses();if(c.getHandleSize()!=22){if(c.getOrientation()=="vertical"){a.addStyle("height",c.getHandleSize()+"px");}else{a.addStyle("width",c.getHandleSize()+"px");}a.writeStyles();}a.write(">");if(c.getOrientation()=="vertical"){a.write("&#9650");}else{if(R){a.write("&#9658");}else{a.write("&#9668");}}a.write("</div>");a.write("<div");a.writeAttribute("id",c.getId()+"-nextbutton");a.writeAttribute("title",b.getText("CAROUSEL_SHOW_NEXT"));a.addClass("sapUiCrslNextBtn");a.writeClasses();if(c.getHandleSize()!=22){if(c.getOrientation()=="vertical"){a.addStyle("height",c.getHandleSize()+"px");}else{a.addStyle("width",c.getHandleSize()+"px");}a.writeStyles();}a.write(">");if(c.getOrientation()=="vertical"){a.write("&#9660");}else{if(R){a.write("&#9668");}else{a.write("&#9658");}}a.write("</div>");a.write("<div");a.writeAttribute("id",c.getId()+"-contentarea");a.addClass("sapUiCrslCnt");a.writeClasses();a.write(">");var d=c.getContent();a.write("<ul");a.writeAttribute("id",c.getId()+"-scrolllist");a.writeAttribute("role","listbox");a.writeAttribute("aria-describedby",c.getId()+"-navigate");a.addClass("sapUiCrslScl");a.writeClasses();a.write(">");for(var i=0;i<d.length;i++){var o=d[i];a.write("<li");a.writeAttribute("id",c.getId()+"-item-"+o.getId());a.writeAccessibilityState(c,{role:"option",posinset:i+1,setsize:d.length,labelledby:c.getId()+"-toggleaction"});a.writeAttribute("tabindex","-1");a.addClass("sapUiCrslItm");a.writeClasses();a.write(">");a.renderControl(o);a.write("</li>");}a.write("</ul>");a.write("</div>");a.write("<div");a.writeAttribute("tabindex","0");a.addClass("sapUiCrslBefore");a.writeClasses();a.write("></div>");a.write("<div");a.writeAttribute("tabindex","0");a.addClass("sapUiCrslAfter");a.writeClasses();a.write("></div>");a.write("<span");a.writeAttribute("id",c.getId()+"-toggleaction");a.addStyle("position","absolute");a.addStyle("top","-20000px");a.writeStyles();a.write(">");a.write(b.getText("CAROUSEL_ACTION_MODE"));a.write("</span>");a.write("<span");a.writeAttribute("id",c.getId()+"-navigate");a.addStyle("position","absolute");a.addStyle("top","-20000px");a.writeStyles();a.write(">");a.write(b.getText("CAROUSEL_NAV"));a.write("</span>");a.write("</div>");};return C;},true);
