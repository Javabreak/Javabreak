from __future__ import annotations

from fastapi import APIRouter

{{imports}}

router = APIRouter(
    {% if info %}
    {% for key,value in info.items() %}
    {{ key }} = "{{ value }}",
    {% endfor %}
    {% endif %}
    )


{% for operation in operations %}
@router.{{operation.type}}('{{operation.snake_case_path}}', response_model={{operation.response}})
def {{operation.function_name}}({{operation.snake_case_arguments}}) -> {{operation.response}}:
    {%- if operation.summary %}
    """
    {{ operation.summary }}
    """
    {%- endif %}
    pass
{% endfor %}
