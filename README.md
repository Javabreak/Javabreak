# Javabreak

## Docker

### Docker build

```docker build -t javabreakimage .```

### Docker launch

```docker run -d --name javabreakcontainer -p 80:80 javabreakimage```

## Development

### Install requirements

```pip install -r requirements.txt```

### Uvicorn launch

```uvicorn back.main:app --reload --host 0.0.0.0 --port 80```

## Run linters locally

```docker run -e RUN_LOCAL=true -v /path/to/local/codebase:/tmp/lint github/super-linter```
