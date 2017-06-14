<?php

// ==============================================================
// Load the parent style.css file
// @link http://codex.wordpress.org/Child_Themes
// ==============================================================
function child_assets() {

	// ------------------------------
	// # Load the stylesheet
  // The array indicates what stylesheets should load before our custom set,
  // therefore giving a higher priority to ours and reducing the need of !importants.
  wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/assets/css/ilsv.min.css',
  array(
    'storefront-style',
    'storefront-woocommerce-style',
    // 'storefront-jetpack-style',
    // 'jetpack_css',
    'elementor-frontend',
    'elementor-pro',
  ), 'all' );

  // ------------------------------
	// # Load the custom script
  wp_enqueue_script( 'child-script', get_stylesheet_directory_uri() . '/assets/js/ilsv.min.js', null, null, true );

}
add_action( 'wp_enqueue_scripts', 'child_assets', 2000 );

?>
