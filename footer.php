<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'storefront_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="col-full">

			<?php
			/**
			 * Functions hooked in to storefront_footer action
			 *
			 * @hooked storefront_footer_widgets - 10
			 * @hooked storefront_credit         - 20
			 */
			do_action( 'storefront_footer' ); ?>

			<div id="ilsvFooterBar" class="ilsv-footer-bar"><?php echo do_shortcode( '[elementor-template id="97"]' ); ?></div>

			<div id="ilsvSiteBy" class="ilsv-maa">
				Site powered by <a href="http://milleradagency.com" target="_blank">Miller Ad Agency</a>.
			</div>

		</div><!-- .col-full -->
	</footer><!-- #colophon -->

	<?php do_action( 'storefront_after_footer' ); ?>

	<!-- <div id="megamenuOverlay" class="mm-overlay mm-hidden"></div> -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
