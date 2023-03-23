# **Service API Plugin**

This plugin is a little help to help you create a service that communicates with an API.

Next you see more details about the plugin.

- [Motivation](#motivation)
- [Methods](#methods)
- [URL](#url)

### **Motivation**

The motivation for creating this plugin stems from the analysis that most services that communicate with an API follow the same implementation line: Similar methods for get, post, put and delete.

So how about having a good part of this code already using this plugin?

## **Methods**
- get_resource_s
- get_resource_ById
- save_resource
- edit_resource
- remove_resource

By default, the typing used in these methods is any, but as the plugin evolves, we will look for ways to allow the inclusion of typing during plugin application.

## **URL**
The url is assembled from information passed on by the user via plugin inputs. This information is:
 - Hostname
 - Port
 - Resource