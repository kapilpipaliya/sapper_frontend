<script>

</script>

<style>
  
</style>

<!-- 
{ attachments.select { |a| a.readable? and a.visible? }
               .map { |a| { content_type: CGI::escape_html(a.content_type),
                            filename:     CGI::escape_html(a.filename),
                            description:  CGI::escape_html(a.description),
                            url: url_for(controller: '/attachments', action: 'show', id: a, filename: a.filename),
                            is_image: !!a.image? # doing the !! as image? for whatever reason returns null or a number
                          }
                    }.to_json.html_safe %>
 -->