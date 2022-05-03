# Javabreak

## Docker

### Docker build

```docker build -t javabreak /path/to/local/codebase```

### Docker launch

```docker run -d --name javabreak -p 80:80 javabreak```

## Development

### Install requirements

```pip install --no-cache-dir --upgrade -r requirements.txt```

### Code generation

```fastapi-codegen -i FILENAME -o PATH -t PATH```

### Uvicorn launch

```uvicorn back.src.main:app --reload --host 0.0.0.0 --port 80```

### Run linters locally

```docker pull github/super-linter:latest```

```docker run -e RUN_LOCAL=true -v /path/to/local/codebase:/tmp/lint github/super-linter```

```docker run -e RUN_LOCAL=true -v /path/to/local/codebase/file:/tmp/lint/file github/super-linter```
