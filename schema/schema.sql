WITH RECURSIVE NamespaceHierarchy AS (
    SELECT id, parent_namespace, name, name AS fully_qualified_name
    FROM namespace
    WHERE parent_namespace IS NULL

    UNION ALL

    SELECT n.id, n.parent_namespace, n.name, nh.fully_qualified_name || '.' || n.name
    FROM namespace n
    JOIN NamespaceHierarchy nh ON n.parent_namespace = nh.id
)
SELECT nh.fully_qualified_name || '.' || i.name AS fully_qualified_type_name
FROM interface i
JOIN NamespaceHierarchy nh ON i.namespace = nh.id;

