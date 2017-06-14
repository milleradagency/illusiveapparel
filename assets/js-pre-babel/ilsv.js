// ==============================================================
// # NAV HOVER OVERLAY
// ==============================================================

// -----------------------------------------
// ## NAV HOVER OVERLAY => DESCRIPTION
// When a user hovers their mouse over the page header on desktops, a class
// is added to the overlay div to display it in a fade-in effect via CSS
// animations. When a user's mouse leaves the header, the effect is hidden.

// -----------------------------------------
// ## NAV HOVER OVERLAY => BREAKDOWN
// This function initiates in the following stages:
//
// 1) User hovers mouse over #masthead.
//    1.1) Checks to see if #megamenuOverlay does has the "mm-active" class.
//    1.2) Class "mm-hidden" is removed from #megamenuOverlay.
//    1.3) Class "mm-active" is added to #megamenuOverlay.
//
// 2) User's mouse leaves #masthead
//    2.1) Class "mm-active" is removed from #megamenuOverlay.
//    2.2) After 1000ms (1s), class "mm-hidden" is added to #megamenuOverlay.

// -----------------------------------------
// ## NAV HOVER OVERLAY => BUG FIX
// There is a bug between the Elementor editor and this script, therefore
// the div#megamenuOverlay is removed from the DOM when the editor is active.

jQuery(function($) {
  let megamenu        = $("#masthead");
  let site            = $("#megamenuOverlay");
  let hover           = "mm-hover";
  let active          = "mm-active";
  let hidden          = "mm-hidden";

  megamenu.hover(function() {         // 1
    if ( !site.hasClass( active )) {  // 1.1
      site.removeClass( hidden );     // 1.2
      site.addClass( active );        // 1.3
    }
    else {                            // 2
      site.removeClass( active );     // 2.1
      window.setTimeout(function() {
        site.addClass( hidden );      // 2.2
      }, 1000);
    }
  });

  // -----------------------------------------
  // ## NAV HOVER OVERLAY => BUG FIX
  // DESTROY OVERLAY ID INSIDE ELEMENTOR EDITOR
  if ($("body").hasClass("elementor-editor-active")) {
    site.remove();
  }
  else {
    null
  };
});
