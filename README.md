# WMS Backend

A NestJS-based backend service with GraphQL API and MongoDB integration.

## Project Structure

```
wms-backend/
├── src/
│   ├── config/             # Configuration files
│   │   └── config.ts      # Environment and app configuration
│   ├── graphql/           # GraphQL related files
│   │   ├── schema.gql     # Auto-generated GraphQL schema
│   │   ├── graphql.ts     # Generated TypeScript types
│   │   └── base.types.ts  # Base GraphQL types
│   ├── migrations/        # Database migrations
│   │   ├── migrate.ts     # Migration runner
│   │   └── 001-create-users.ts  # User collection migration
│   ├── models/            # Database models
│   │   └── user.model.ts  # User Mongoose model & GraphQL type
│   ├── modules/           # Feature modules
│   │   └── user/         # User module
│   │       ├── dto/      # Data Transfer Objects
│   │       │   └── create-user.input.ts  # User creation DTO
│   │       ├── user.module.ts   # User module definition
│   │       ├── user.resolver.ts # GraphQL resolvers
│   │       └── user.service.ts  # Business logic
│   ├── app.controller.ts  # App controller (if needed)
│   ├── app.service.ts     # App service (if needed)
│   ├── app.module.ts      # Main application module
│   └── main.ts           # Application entry point
├── test/                  # Test files
│   └── jest-e2e.json     # E2E test configuration
├── .env                   # Environment variables
├── .env.example          # Example environment variables
├── .eslintrc.js          # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── CONTRIBUTING.md       # Contribution guidelines
├── nest-cli.json        # NestJS CLI configuration
├── package.json         # Project dependencies and scripts
├── README.md           # Project documentation
├── tsconfig.json       # TypeScript configuration
└── tsconfig.build.json # TypeScript build configuration
```

## Module Structure

Each feature module in the `modules` directory is self-contained and includes:

1. **Module Definition** (`*.module.ts`)
   - Defines module dependencies
   - Configures providers
   - Sets up imports/exports

2. **Service** (`*.service.ts`)
   - Contains business logic
   - Handles data operations
   - Implements domain rules

3. **Resolver** (`*.resolver.ts`)
   - Defines GraphQL queries/mutations
   - Maps GraphQL operations to services
   - Handles GraphQL-specific logic

4. **DTOs** (`dto/*.ts`)
   - Defines data transfer objects
   - Implements input validation
   - Specifies GraphQL inputs

This modular architecture ensures:
- Clear separation of concerns
- Easy testing and maintenance
- Scalable codebase
- Module independence
- Better code organization

## Key Components

### Models
Models define both the MongoDB schema and GraphQL types. Located in `src/models/`.
Example: `user.model.ts` defines:
- Database schema using `@Prop()` decorators
- GraphQL type using `@Field()` decorators
- Document type for Mongoose

### DTOs (Data Transfer Objects)
DTOs handle input validation for GraphQL mutations and queries. Located in `src/modules/*/dto/`.
Example: `create-user.input.ts` includes:
- Input validation rules using class-validator
- GraphQL input type definition

### Modules
Each feature is organized into a module. Located in `src/modules/`.
Each module contains:
- Module definition (*.module.ts)
- Service layer (*.service.ts)
- GraphQL resolvers (*.resolver.ts)
- DTOs and other related files

### GraphQL
- Schema is automatically generated in `src/graphql/schema.gql`
- Playground available at http://localhost:3000/graphql when in development

## Prerequisites

- Node.js (v14 or later)
- MongoDB instance
- npm or yarn

## Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/localtestdb
```

## Installation

```bash
# Install dependencies
npm install
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

## Database Migrations

Migrations are used to manage database schema changes.

```bash
# Run migrations up
npm run migrate:up

# Rollback migrations
npm run migrate:down
```

### Available Migrations:
1. `001-create-users.ts`: Creates the users collection with:
   - Email validation
   - Required fields (email, name, password)
   - Unique email index
   - Timestamps

## API Examples

### GraphQL Queries

1. Fetch all users:
```graphql
query {
  users {
    _id
    email
    name
    createdAt
  }
}
```

2. Fetch single user:
```graphql
query {
  user(id: "userId") {
    _id
    email
    name
    createdAt
  }
}
```

### GraphQL Mutations

1. Create new user:
```graphql
mutation {
  createUser(input: {
    email: "user@example.com"
    name: "John Doe"
    password: "securepassword"
  }) {
    _id
    email
    name
    createdAt
  }
}
```

## Testing

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Development Guidelines

1. **Models**:
   - Use `@Prop()` for MongoDB schema properties
   - Use `@Field()` for GraphQL exposed fields
   - Sensitive data should not have `@Field()` decorator

2. **DTOs**:
   - Use class-validator decorators for validation
   - Use meaningful validation messages
   - Keep DTOs focused and specific

3. **Services**:
   - Handle business logic
   - Interact with database through models
   - Return clean data objects

4. **Resolvers**:
   - Handle GraphQL operations
   - Use DTOs for input validation
   - Map to service methods

## Security Considerations

1. Password fields are excluded from GraphQL responses
2. Email uniqueness is enforced at database level
3. Input validation is implemented using class-validator
4. MongoDB connection string should be in environment variables

## Error Handling

The application includes built-in error handling for:
- Database operations
- Input validation
- GraphQL operations
- Migration processes

## Contributing

1. Create feature branch
2. Make changes
3. Run tests
4. Submit pull request

## License

[UNLICENSED]
