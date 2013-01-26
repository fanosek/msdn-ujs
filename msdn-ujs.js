// This is a user javascript for modifying appearance of online MSDN documentation, especially class and structure members listing.
// Because in original MSDN doc are inherited members from parent classes displayed together with class own members, this script will set opacity of inherited members to highlight its own members.
// For use this script, you need probably some plugin to your browser. In chrome/chromium you can use [Personalized Web](https://chrome.google.com/webstore/detail/personalized-web/plcnnpdmhobdfbponjpedobekiogmbco) and in firefox you can use [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script>
$(function()
{
$.each($("tr:contains('Inherited from')"), function()
    {
       //alert('ted');
       $(this).find('td').css("opacity", "0.5")
    });
})
</script>
