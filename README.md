## Experimental
Trying to create a kubevirt autogenerate typescript client library.

Inspired by `@kubevirt-ui/kubevirt-api` - But we want an api client that is compatible with `@kubernetes/client-node` npm package.

The Autogeneration is uses the following docker command:
```
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i local/swagger-kubevirt.json -g typescript -o /local/src/ --skip-validate-spec --type-mappings=Date=string --additional-properties=importFileExtension='.js',sortParamsByRequiredFlag=true,supportsES6=true,platform=node,framework=fetch-api,modelPropertyNaming=original
```



