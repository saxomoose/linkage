interface Namespace {
    id: number;
    parent_namespace?: Namespace; // Optional since it's a foreign key
    name: string;
}

interface Type {
    id: number;
    namespace: Namespace; // Foreign key
    name: string;
    parser?: string;
    description?: string;
}

interface TypeMapping {
    id: number;
    key: Type; // Foreign key
    value: Type; // Foreign key
    mapping_type: 'implementation' | 'map' | 'union' | 'intersection';
}

interface Property {
    id: number;
    name: string;
    cardinality: Cardinality; // Foreign key
    description?: string;
}

interface Range {
    id: number;
    property: Property; // Foreign key
    type: Type; // Foreign key
}

interface Cardinality {
    id: number;
    required: boolean;
    collection_type: 'set' | 'list' | 'map';
}
