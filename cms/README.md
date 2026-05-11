# Payload Blank Template

This template comes configured with the bare minimum to get started on anything you need.

## Quick start

This template can be deployed directly from our Cloud hosting and it will setup MongoDB and cloud S3 object storage for media.

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

## Content seeding

Some collections (case studies, etc.) have content worth keeping in git so a fresh database can be bootstrapped, or so a new project can be added with a code-reviewed copy pass. We do this with **seed scripts**, not Payload migrations.

### Why seeds and not migrations

Migrations are for schema changes only. If you put content inside a migration's `up()`:

- The moment an editor changes the record from the admin UI, the migration becomes a lie. The admin UI is the source of truth for content, not the codebase.
- `down()` looks like a rollback but it isn't — it would erase whatever the editor has changed since.
- Every new project becomes another 80+ line migration file, even though that content belongs in the DB.

Seeds, in contrast, are **idempotent and manually invoked**. They create a record only if it doesn't exist yet (`--force` overrides). Once a record exists in the CMS, the admin UI takes over and the seed becomes irrelevant — the seed is essentially a typed, reviewable "first draft".

### Layout

```
cms/src/seed/
  index.ts                      # CLI entry point
  case-studies/
    index.ts                    # array of all case-study seeds
    <slug>.ts                   # one file per case study
```

### Adding a new seed

1. Create `cms/src/seed/case-studies/<slug>.ts` exporting a `slug` constant and a `data` object (matching the case-studies collection shape).
2. Append the new module's `data` to the array in `cms/src/seed/case-studies/index.ts`.

### Running

```bash
pnpm seed                         # creates every defined seed that does not already exist
pnpm seed <slug>                  # seeds only the given slug
pnpm seed <slug> --force          # overwrites the existing doc (use sparingly)
```

The script uses the Payload local API against whatever database `DATABASE_URI` points to in your shell. To seed a remote environment, export that environment's `DATABASE_URI` (and `PAYLOAD_SECRET`) in your shell before running — seeds are **not** part of the deploy pipeline.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
