# Prerequisites

- docker with compose plugin (refer to [docker documentation](https://docs.docker.com/))

# Whole backend

You can run whole backend at once by executing this [script](../startup.sh).
After running above command, backend will be accessible on [`http://localhost:3000`](http://localhost:3000). To check routes, [look at gateway configuration](../gateway/etc/nginx/nginx.conf) and api documentation

# Part of the backend

You can run part of the backend by executing `<root>/<service-name>/startup.sh`.
For example if you want to run only `posts` service (with database and gateway), run this [script](../posts/startup.sh). After that `posts` service should be accessible on [`http://localhost:4000`](http://localhost:4000) on default port. To check routes, [look at posts gateway configuration](../posts/gateway/etc/nginx/nginx.conf). Running other services is analogous.

<table>
  <tr>
    <th>service</th>
    <th>url</th>
  </tr>
  <tr>
    <td>posts</td>
    <td>http://localhost:4000</td>
  </tr>
  <tr>
    <td>users</td>
    <td>http://localhost:4001</td>
  </tr>
</table>

**info**: _if you want to run backend on windows simply change script extension to `.bat`, rest stays the same_

**warning**: _when executing script on linux (`startup.sh`) you may need to give it execution permissions by running `chmod u+x ./startup.sh` command before running the script._

# Troubleshooting

## Taken ports

Try changing ports in compose.yaml files
