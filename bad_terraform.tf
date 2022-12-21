resource "aws_api_gateway_method" "inbound_post" {

  rest_api_id   = aws_api_gateway_rest_api.inbound_api.id

  resource_id   = aws_api_gateway_resource.inbound_resource.id

  http_method   = "POST"

  authorization = "NONE"

  request_parameters = {

    "method.request.path.proxy" = true

  }

}