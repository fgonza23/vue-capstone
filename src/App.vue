<template>
  <div id="app">

<!-- navbar begins -->

<nav class="navbar navbar-expand-md main-nav header-transparent navbar-scrollUp">
  <div class="container">
    <button class="navbar-toggler animated" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="burger-menu icon-toggle"><i class="icon-menu icons"></i></i></span>
    </button>
    <a class="navbar-brand" href="index.html">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="130px" height="30px">
       <path fill-rule="evenodd" class="path-1"  fill="rgb(12, 198, 82)"
      d="M22.000,29.113 C20.270,27.358 9.000,15.934 9.000,15.934 L11.000,13.907 C11.000,13.907 21.939,24.996 23.000,26.071 C24.061,27.147 27.000,26.909 27.000,25.058 C27.000,23.206 27.000,8.001 27.000,5.797 C27.000,3.593 24.105,2.649 23.000,3.770 C21.895,4.890 20.000,6.999 20.000,6.999 L18.000,5.000 C18.000,5.000 20.503,2.126 22.000,0.729 C23.497,-0.670 30.000,-0.474 30.000,4.784 C30.000,10.041 30.000,19.883 30.000,25.058 C30.000,30.233 23.730,30.867 22.000,29.113 ZM19.000,16.093 C19.000,16.093 8.061,5.003 7.000,3.928 C5.939,2.852 3.000,3.090 3.000,4.941 C3.000,6.794 3.000,21.999 3.000,24.202 C3.000,26.406 5.895,27.351 7.000,26.230 C8.105,25.109 10.000,22.999 10.000,22.999 L12.000,24.999 C12.000,24.999 9.497,27.873 8.000,29.271 C6.503,30.669 -0.000,30.474 -0.000,25.216 C-0.000,19.959 -0.000,10.117 -0.000,4.941 C-0.000,-0.234 6.270,-0.867 8.000,0.887 C9.730,2.641 21.000,14.065 21.000,14.065 L19.000,16.093 Z"/>
       </svg>
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item dropdown drop_single ">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)">Users
          </a>
          <ul class="dropdown-menu dd_first">
            <li class="dropdown">
              <router-link class="dropdown-item" to="/signup">Signup</router-link>
              <router-link class="dropdown-item" to="/login">Login</router-link>
               <router-link class="dropdown-item" to="/logout">Logout</router-link>
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
             <!--  <ul class="dropdown-menu submenu">
              
                <li><a href="portfolio-fullwidth.html">Fullwidth</a></li>
                <li><a href="portfolio-boxed-2-column.html">Boxed 2 Column</a></li>
                <li><a href="portfolio-boxed-3-column.html">Boxed 3 Column</a></li>
                <li><a href="portfolio-boxed-4-column.html">Boxed 4 Column</a></li>
                <li><a href="portfolio-boxed-sidebar.html">Boxed With Sidebar</a></li>
                </li>
              </ul> -->
    
        
                 <!--  <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a> -->
                  <!-- <ul class="dropdown-menu submenu"> -->
                   <!--  <router-link class="dropdown-item" to="/signup">Sign up</router-link> -->
                   <!--  <li><a href="portfolio-fullwidth.html">Fullwidth</a></li>
                    <li><a href="portfolio-boxed-2-column.html">Boxed 2 Column</a></li>
                    <li><a href="portfolio-boxed-3-column.html">Boxed 3 Column</a></li>
                    <li><a href="portfolio-boxed-4-column.html">Boxed 4 Column</a></li>
                    <li><a href="portfolio-boxed-sidebar.html">Boxed With Sidebar</a></li> -->
                 <!--  </ul> -->
                </li>


            <li class="dropdown">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
              <ul class="dropdown-menu submenu">
                <li><a href="portfolio-card-fullwidth.html">Fullwidth</a></li>
                <li><a href="portfolio-card-boxed-2-column.html">Boxed 2 Column</a></li>
                <li><a href="portfolio-card-boxed-3-column.html">Boxed 3 Column</a></li>
                <li><a href="portfolio-card-boxed-4-column.html">Boxed 4 Column</a></li>
                <li><a href="portfolio-card-boxed-sidebar.html">Boxed With Sidebar</a></li>
              </ul>
            </li>
            <li><a href="portfolio-project-details.html" >Portfolio Project Details</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown drop_single ">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)">Services</a>
          <ul class="dropdown-menu dd_first">
            <li><a href="service.html">Services</a></li>
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service Details</a>
              <ul class="dropdown-menu submenu">
                <li><a href="service-details-left-sidebar.html">Service Left Sidebar</a></li>
                <li><a href="service-details-right-sidebar.html">Service Right Sidebar</a></li>
                <li><a href="service-details-fullwidth.html">Service Fullwidth</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown drop_single ">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)">Pages</a>
          <ul class="dropdown-menu dd_first">
            <li><a href="page-aboutus.html">About Us</a></li>
            <li><a href="page-work-process.html">Work process</a></li>
            <li><a href="page-team.html">Team Members</a></li>
            <li><a href="page-member-details.html">Member Profile</a></li>
            <li><a href="page-faq.html">FAQ</a></li>
            <li><a href="page-contactus.html">Contact</a></li>
            <li><a href="page-comingsoon.html">Comingsoon page</a></li>
            <li><a href="page-error.html">404 page</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown drop_single ">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)">Blogs</a>
          <ul class="dropdown-menu dd_first">
            <li><a href="blog-fullwidth.html">Blog Fullwidth</a></li>
            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
            <li><a href="blog-post-left-sidebar.html">Blog Post Left Sidebar</a></li>
            <li><a href="blog-post-right-sidebar.html">Blog Post Right Sidebar</a></li>
          </ul>
        </li>

        <li class=" dropdown megaDropMenu nav-item " >
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)">Elements</a>
          <ul class="row dropdown-menu justify-content-md-between">
            <li class="">
              <h6>General Elements</h6>
              <ul class="list-unstyled">
                <li><a href="basic-accordions.html">Accordions</a></li>
                <li><a href="basic-alert.html">Alerts</a></li>
                <li><a href="basic-animation.html">Animation</a></li>
                <li><a href="basic-badge.html">Badge</a></li>
                <li><a href="basic-background.html">Background</a></li>
                <li><a href="basic-buttons.html">Buttons</a></li>
                <li><a href="basic-buttons-group.html">Button Group</a></li>
                <li><a href="basic-card.html">Card</a></li>
                <li><a href="basic-carousel.html">Carousel</a></li>
              </ul>
            </li>
            <li class="">
              <h6>General Elements</h6>
              <ul class="list-unstyled">
                <li><a href="basic-countdown.html">Countdown</a></li>
                <li><a href="basic-counter.html">Counter</a></li>
                <li><a href="basic-divider.html">Divider & Seperator</a></li>
                <li><a href="basic-forms.html">Forms</a></li>
                <li><a href="basic-heading.html">Heading</a></li>
                <li><a href="basic-iconset.html">Iconset - FontAwesome </a></li>
                <li><a href="basic-iconset-simple-lines.html">Iconset - Simple Line </a></li>
                <li><a href="basic-icon-style.html">Icon Sizes & styles </a></li>
              </ul>
            </li>
            <li class="">
              <h6>General Elements</h6>
              <ul class="list-unstyled">
                <li><a href="basic-image.html">Image</a></li>
                <li><a href="basic-map.html">Map</a></li>
                <li><a href="basic-modal.html">Modal</a></li>
                <li><a href="basic-progressbar.html">Progress</a></li>
                <li><a href="basic-tabs.html">Tabs & wizards</a></li>
                <li><a href="basic-tables.html">Tables</a></li>
                <li><a href="basic-typography.html">Typography</a></li>
                <li><a href="basic-video.html">Video & Audio</a></li>
              </ul>
            </li>
            <li class="">
              <h6>Theme Kit Elements</h6>
              <ul class="list-unstyled">
                <li><a href="kit-accordions.html">Accordions</a></li>
                <li><a href="kit-breadcrumb.html">Breadcrumb</a></li>
                <li><a href="kit-blog.html">Blogs</a></li>
                <li><a href="kit-counter.html">Counter Up</a></li>
                <li><a href="kit-contact.html">Contact</a></li>
                <li><a href="kit-gallery.html">Gallery</a></li>
                <li><a href="kit-navbar.html">Navbar</a></li>
                <li><a href="kit-pagination.html">Pagination</a></li>
              </ul>
            </li>
            <li class="">
              <h6>Theme Kit Elements</h6>
              <ul class="list-unstyled">
                <li><a href="kit-pricing.html">Pricing Table</a></li>
                <li><a href="kit-progressbar.html">Theme Progressbar</a></li>
                <li><a href="kit-section-title.html">Section Heading</a></li>
                <li><a href="kit-service.html">Service contents</a></li>
                <li><a href="kit-team.html">Team</a></li>
                <li><a href="kit-testimonials.html">Testimonials</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <!-- header search -->
        <li class="nav-item search_hook">
          <a href="javascript:void(0)" data-toggle="modal" data-target="#searchModal" class="btn-search nav-link"><i class="fa fa-search"></i></a>
          <form  class="search_form">
            <input type="text" name="search" placeholder="Search...">
            <button class="no-bg btn-search" type="submit"><i class="fa fa-search"></i></button>
          </form>
        </li>
      </ul>
    </div>
    <!-- header search ends-->
  </div>

</nav>
    <!-- navbar end -->
<div id="my-main" >
  <router-view/>
</div>
      <!-- footer begins -->

  <footer class="footer footer-classic bg-dark">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-lg-7 col-md-8 ">
          <div class="text-center">
            <a href="">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="130px" height="30px">
               
               <path fill-rule="evenodd" class="path-1" fill="rgb(12, 198, 82)"
              d="M22.000,29.113 C20.270,27.358 9.000,15.934 9.000,15.934 L11.000,13.907 C11.000,13.907 21.939,24.996 23.000,26.071 C24.061,27.147 27.000,26.909 27.000,25.058 C27.000,23.206 27.000,8.001 27.000,5.797 C27.000,3.593 24.105,2.649 23.000,3.770 C21.895,4.890 20.000,6.999 20.000,6.999 L18.000,5.000 C18.000,5.000 20.503,2.126 22.000,0.729 C23.497,-0.670 30.000,-0.474 30.000,4.784 C30.000,10.041 30.000,19.883 30.000,25.058 C30.000,30.233 23.730,30.867 22.000,29.113 ZM19.000,16.093 C19.000,16.093 8.061,5.003 7.000,3.928 C5.939,2.852 3.000,3.090 3.000,4.941 C3.000,6.794 3.000,21.999 3.000,24.202 C3.000,26.406 5.895,27.351 7.000,26.230 C8.105,25.109 10.000,22.999 10.000,22.999 L12.000,24.999 C12.000,24.999 9.497,27.873 8.000,29.271 C6.503,30.669 -0.000,30.474 -0.000,25.216 C-0.000,19.959 -0.000,10.117 -0.000,4.941 C-0.000,-0.234 6.270,-0.867 8.000,0.887 C9.730,2.641 21.000,14.065 21.000,14.065 L19.000,16.093 Z"/>
               </svg>
            </a>
            <p>
              close
            </p>
            <div class="social-icons">
              <a href="#" class="btn btn-social btn-social-o facebook">
                <i class="fa fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-social btn-social-o twitter">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#" class="btn btn-social btn-social-o pinterest">
                <i class="fa fa-pinterest-p"></i>
              </a>
              <a href="#" class="btn btn-social btn-social-o google-plus">
                <i class="fa fa-google-plus"></i>
              </a>
              <a href="#" class="btn btn-social btn-social-o linkedin">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#" class="btn btn-social btn-social-o vimeo">
                <i class="fa fa-vimeo"></i>
              </a>
              <a href="#" class="btn btn-social btn-social-o dribbble">
                <i class="fa fa-dribbble" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
         <!-- BACK TO TOP BUTTON -->
        <a href="#pageTop" class="backToTop"><i class="fa fa-chevron-up"></i></a>
      </div>
      <!-- COPY RIGHT -->
      <div class="copyright">
        <hr>
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 ">
            <div class="copyRight_text text-center">
              <p> © 2017 Copyright Nexa Bootstrap Template by <a class="text-primary" href="http://www.iamabdus.com/" target="_blank">Abdus</a>.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </footer> -->

<!--   footer ends
 -->

  </div>
</template>

<style>
#my-main {
  padding-top: 150px;
  padding-bottom: 150px;
  min-height: 650px;
}
</style>
