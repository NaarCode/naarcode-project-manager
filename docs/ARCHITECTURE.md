# Architecture overview

The application uses a TypeScript/React interface with server-side API routes and application services. Project, user, checklist, session, and activity records are modeled in Cloudflare D1 through Drizzle ORM. Protected project files are stored in Cloudflare R2.

## Workflow

1. An authorized user creates a project, assigns ownership and members, and selects its type and modules.
2. The system assembles a checklist from core, project-type, and module entries, then stores a project-specific snapshot.
3. Members update their assigned, permitted checklist items; project milestones and activity history are updated through server-side actions.
4. The server recalculates progress and quality metrics from persisted checklist states.
5. Authorized users review project status, activity, notes, and related files.

## Trust boundaries

- Authentication uses independent credentials and server-managed sessions.
- Authorization takes account role and project membership into consideration.
- Operations that mutate project data are validated and enforced server-side.
- Files are accessed through protected application endpoints instead of being exposed as an unrestricted public directory.

This document is intentionally high-level and does not disclose private API routes, deployment configuration, or sensitive implementation details.
